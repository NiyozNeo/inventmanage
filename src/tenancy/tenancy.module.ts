import { Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request as ExpressRequest } from 'express';
import { getTenantConnection } from './tenancy.utils';

import { CONNECTION } from './tenancy.symbols';

const connectionFactory = {
	provide: CONNECTION,
	scope: Scope.REQUEST,
	useFactory: (request: ExpressRequest) => {
		const tenantname = request['tenantname'];

		if (tenantname) {
			return getTenantConnection(tenantname);
		}

		return null;
	},
	inject: [REQUEST],
};

@Global()
@Module({
	providers: [connectionFactory],
	exports: [CONNECTION],
})
export class TenancyModule {}