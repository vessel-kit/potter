import { Injectable } from '@nestjs/common';
import Joi, { CustomHelpers } from '@hapi/joi';
import dotenv from 'dotenv';
import cronParser from 'cron-parser';

export interface Config {
  PORT: number;
  HOST: string;
  DATABASE_URL: string;
  NODE_ENV: 'development' | 'test' | 'production';
  ANCHORING_SCHEDULE: string;
  IPFS_URL: string;
  BLOCKCHAIN_URL: string;
  BLOCKCHAIN_SECRET: string;
}

function cronValidation(value: string, helpers: CustomHelpers) {
  try {
    cronParser.parseExpression(value);
    return value;
  } catch (e) {
    return helpers.error('Not a cron expression');
  }
}

const schema = Joi.object<Config>({
  PORT: Joi.number()
    .default(3000)
    .description('Port to listen to'),
  HOST: Joi.string()
    .default('0.0.0.0')
    .description('Host to listen to'),
  DATABASE_URL: Joi.string()
    .uri()
    .required()
    .description('Database connection url'),
  NODE_ENV: Joi.string()
    .default('development')
    .allow('development', 'test', 'production'),
  ANCHORING_SCHEDULE: Joi.string()
    .custom(cronValidation)
    .required()
    .description('Schedule for anchoring transactions'),
  IPFS_URL: Joi.string()
    .uri()
    .required()
    .description('IPFS endpoint'),
  BLOCKCHAIN_URL: Joi.string()
    .uri({ scheme: ['ethereum+http', 'ethereum+https', 'ethereum+ws', 'ethereum+wss'] })
    .required()
    .description('Blockchain endpoint'),
  BLOCKCHAIN_SECRET: Joi.string()
    .optional()
    .description('Blockchain private key'),
});

@Injectable()
export class ConfigService {
  readonly current: Config;

  constructor() {
    dotenv.config();
    const result = schema.validate(process.env, { allowUnknown: true });
    if (result.error) {
      throw new Error(`Config validation error: ${result.error.message}`);
    }
    this.current = result.value as Config;
  }
}
