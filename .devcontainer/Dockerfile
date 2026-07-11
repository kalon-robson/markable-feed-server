FROM mcr.microsoft.com/devcontainers/base:jammy

ARG USERNAME=vscode

RUN su ${USERNAME} -c "bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.5/install.sh | bash'"
RUN su ${USERNAME} -c "bash -c 'source /home/${USERNAME}/.nvm/nvm.sh && nvm install 24 && nvm use 24'"
RUN su ${USERNAME} -c "bash -c 'source /home/${USERNAME}/.nvm/nvm.sh && npm install -g pnpm'"

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends mysql-client