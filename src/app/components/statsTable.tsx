import React from "react";

import Table from "./common/table/table";

type StatsTableProps = {
  items: StatsItem[];
};

type StatsItem = {
  id: string;
  active: number;
  archive: number;
};

const StatsTable: React.FC<StatsTableProps> = ({ items }) => {
  const columns = [
    {
      name: "Name",
      content: (item: StatsItem) => item.id
    },
    {
      name: "Active",
      content: (item: StatsItem) => item.active
    },
    {
      name: "Archive",
      content: (item: StatsItem) => item.archive
    }
  ];

  return (
    <div className="overflow-auto h-60 mt-8 mb-2 scroll">
      <Table items={items} columns={columns} />
    </div>
  );
};

export default StatsTable;
