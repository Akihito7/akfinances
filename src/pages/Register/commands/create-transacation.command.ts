import { api } from "../../../axios";
import { Command, CommandHandlerInterface } from "../../../utils/command";

export interface CreateTransactionCommandProps {
  name: string;
  value: number
  category: string;
  type: string,
  date: string
  user_id: string;
}

export class CreateTransactionCommand extends Command<CreateTransactionCommandProps> { }


type Output = void;

export class CreateTransactionHandler implements CommandHandlerInterface<CreateTransactionCommand, Output> {
  async handle(command: CreateTransactionCommand) {
    await api.post("/transaction/", command.props);
  }
}