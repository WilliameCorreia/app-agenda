import { Supervisor } from './Supervisor';
import { Operador } from './Operador';
import { DadosEnel } from './DadosEnel';

export class estacao{
    public estacaoid: number;
    public tipo: string;
    public nome: string;
    public operadores: Operador[];
    public supervisor: Supervisor;
    public dadosenel: DadosEnel;
}