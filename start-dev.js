import { spawn } from 'child_process';
const run = (command, args, name) => {
  const pocess = spawn(command, args, { stdio: 'inherit', shell: true});
  process.on('close', code =>{
    console.log(`[${name}] exited with code ${code}`);
  });
};
run('nodemon', ['src/backend/index.js'], 'backend');
run('vite',[], 'frontend');