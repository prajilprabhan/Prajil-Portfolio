const { execSync } = require('child_process');
const readline = require('readline');

// Check if we are in a git repository
try {
  execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
} catch (e) {
  console.error('Error: Not a git repository.');
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter commit message (default: "Session update"): ', (answer) => {
  const commitMessage = answer.trim() || 'Session update';
  try {
    console.log('\n1. Staging files...');
    execSync('git add -A', { stdio: 'inherit' });

    // Check if there are changes to commit
    const status = execSync('git status --porcelain').toString().trim();
    if (!status) {
      console.log('No changes to commit. Everything is up to date!');
      rl.close();
      return;
    }

    console.log(`\n2. Committing with message: "${commitMessage}"...`);
    // Escape double quotes in commit message
    const escapedMsg = commitMessage.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMsg}"`, { stdio: 'inherit' });

    console.log('\n3. Pushing to GitHub...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('\nSuccessfully pushed to GitHub!');
  } catch (error) {
    console.error('\nAn error occurred during git operations:', error.message);
  } finally {
    rl.close();
  }
});
