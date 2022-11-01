FROM rust:1.64.0

WORKDIR /app

RUN cargo install wasm-pack

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash

RUN apt-get install -y nodejs

CMD npm ci && npm run build