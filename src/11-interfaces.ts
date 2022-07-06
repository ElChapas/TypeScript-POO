// Implementar interfaces en clases es hacer un contrato para que dicha clase deba implementar obligatoriamente
// los atributos y metodos que se definan.

interface Driver {
  databae: string;
  password: string;
  port: number;

  connect():void
  disconnect():void
  isConnected():void
}

class PostgressDriver implements Driver {
  constructor(
    public databae: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(): void {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    // Connection
  }
}

class OracleDriver implements Driver {
  constructor(
    public databae: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(): void {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    // Connection
  }
}
