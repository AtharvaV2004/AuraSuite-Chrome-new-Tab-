const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const distDir = path.join(__dirname, 'dist');

try {
  // Remove old dist
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  // Rename out to dist
  if (fs.existsSync(outDir)) {
    fs.renameSync(outDir, distDir);
  }
} catch (e) {
  console.log("Notice: " + e.message);
  console.log("dist folder might be locked by Chrome Extension. Copying files instead...");
  if (fs.existsSync(outDir)) {
    fs.cpSync(outDir, distDir, { recursive: true, force: true });
    try {
      fs.rmSync(outDir, { recursive: true, force: true });
    } catch(err) {
      console.log('Could not remove temporary outDir, continuing: ' + err.message);
    }
  }
}

const nextDir = path.join(distDir, '_next');
const newNextDir = path.join(distDir, 'next');

try {
  if (fs.existsSync(nextDir)) {
    fs.renameSync(nextDir, newNextDir);
  }
} catch (e) {
  console.log("Notice: " + e.message);
  console.log("Could not rename _next. Copying instead...");
  if (fs.existsSync(nextDir)) {
    fs.cpSync(nextDir, newNextDir, { recursive: true, force: true });
    try {
      fs.rmSync(nextDir, { recursive: true, force: true });
    } catch(err) {
      console.log('Could not remove original _next folder, continuing: ' + err.message);
    }
  }
}

const crypto = require('crypto');

function replaceStringsInFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceStringsInFiles(fullPath);
    } else {
      if (/\.(html|css|js|json)$/.test(entry.name)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let updatedContent = content
          .replace(/\/_next\//g, '/next/')
          .replace(/\\\/_next\\\//g, '\\/next\\/')
          .replace(/"_next\//g, '"next/')
          .replace(/_buildManifest\.js/g, 'buildManifest.js')
          .replace(/_ssgManifest\.js/g, 'ssgManifest.js')
          .replace(/_not-found/g, 'not-found')
          .replace(/_app-/g, 'app-')
          .replace(/_error-/g, 'error-');
        
        if (entry.name.endsWith('.html')) {
          // Extract inline scripts to comply with MV3 CSP
          updatedContent = updatedContent.replace(/<script([^>]*?)>(.*?)<\/script>/gs, (match, attrs, scriptContent) => {
            // Leave JSON scripts alone
            if (attrs.includes('type="application/json"') || attrs.includes('type="importmap"') || attrs.includes('src=')) {
              return match;
            }
            if (!scriptContent.trim()) {
              return match;
            }
            
            const hash = crypto.createHash('md5').update(scriptContent).digest('hex');
            const inlineFileName = `inline-${hash}.js`;
            const outPath = path.join(dir, inlineFileName);
            
            fs.writeFileSync(outPath, scriptContent, 'utf8');
            return `<script${attrs} src="${inlineFileName}"></script>`;
          });
        }
        
        if (content !== updatedContent) {
          fs.writeFileSync(fullPath, updatedContent, 'utf8');
        }
      }
    }
  }
}

function renameUnderscoreFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // First rename children recursively
    if (entry.isDirectory()) {
      renameUnderscoreFiles(fullPath);
    }
    
    // Then rename current file/folder if it starts with _
    if (entry.name.startsWith('_')) {
      const newName = entry.name.substring(1);
      const newPath = path.join(dir, newName);
      fs.renameSync(fullPath, newPath);
    }
  }
}

if (fs.existsSync(distDir)) {
  replaceStringsInFiles(distDir);
  renameUnderscoreFiles(distDir);
  console.log('Extension build completed successfully and removed all underscores.');
}
