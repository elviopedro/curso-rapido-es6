# Instalação do **NodeJS**
**Execute no terminal:**
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
**ou**
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

Adicione o trecho abaixo ao arquivo de profile do seu linux (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, ou `~/.bashrc`).

<a id="profile_snippet"></a>
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Teste se a instalação foi bem sucedida (deve retornar a versão do **nvm**):
```sh
nvm --version
```

Após os passos acima vamos instalar o **NodeJS**, execute:
```sh
nvm install node
```

Teste se a instalação foi bem sucedida (deve retornar a versão do **node**):
```sh
node --version
```

# Instalação do **yarn**

**Execute no terminal:**

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Após os passos acima execute a instalação do **yarn**:
```sh
sudo apt update && sudo apt install yarn
```
> **Note:**
> Se ocorrer um erro com o **cmdtest** execute o comando **sudo apt remove cmdtest**.

> **Note:**
> Caso seja retornado um erro de chave de repositório durante a instalação 
execute o comando abaixo:
> sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys [KEY]

Teste se a instalação foi bem sucedida (deve retornar a versão do **yarn**):
```sh
yarn --version
```