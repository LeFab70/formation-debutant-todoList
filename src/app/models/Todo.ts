export class Todo {
  id!: number;
  name!: string;
  createdAt!: Date;
  time!: string;
  done!: boolean;
  note?: string;
  groupManager?: string;
}
