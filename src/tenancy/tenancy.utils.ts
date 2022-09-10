import { Connection, createConnection, getConnectionManager } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { AppDataSource } from '../config';

export function getTenantConnection(tenantName: string): Promise<Connection> {
  const connectionName = `tenant_${tenantName}`;

  const connectionManager = getConnectionManager();

  if (connectionManager.has(connectionName)) {
    const connection = connectionManager.get(connectionName);
    return Promise.resolve(
      connection.isConnected ? connection : connection.connect(),
    );
  }

  return createConnection({
    ...(AppDataSource as PostgresConnectionOptions),
    name: connectionName,
    schema: connectionName,
  });
}
