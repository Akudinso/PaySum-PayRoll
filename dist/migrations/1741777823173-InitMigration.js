"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitMigration1741777823173 = void 0;
class InitMigration1741777823173 {
    constructor() {
        this.name = 'InitMigration1741777823173';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "verificationCode" character varying, "otpExpiresAt" TIMESTAMP, "isVerified" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE ("email"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "admin"`);
        });
    }
}
exports.InitMigration1741777823173 = InitMigration1741777823173;
