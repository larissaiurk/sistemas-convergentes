
import path from 'path';
require('dotenv').config();

class serverPort {
  port = () => {
    const fs = require('fs');
    const YAML = require('js-yaml');
    const raw = fs.readFileSync(path.resolve(__dirname, `${process.env.AMBIENTE ? process.env.AMBIENTE : 'dev'}.yaml`));
    const configuracaoAmbiente = YAML.safeLoad(raw);
    
    return configuracaoAmbiente?.port ? configuracaoAmbiente.port : null;
  }
}

export default new serverPort(); 