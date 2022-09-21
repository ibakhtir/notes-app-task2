export type Column = {
  name: string;
  content: (data: any) => React.ReactNode;
};

export interface Item {
  [key: string]: any;
}

export type TableProps = {
  columns: Column[];
  items: Item[];
};
