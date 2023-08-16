export class Todo {
  id!: number;
  name!: string;
  createdAt!: Date;
  time!: number;
  done!: boolean;
  note?: string;
  groupManager?: string;
}
