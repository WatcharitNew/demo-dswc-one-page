"use client";

import { Checkbox, Input, Table } from "@mantine/core";

import { PencilIcon } from "@/icons";

const MOCK_TABLE_HEADERS = [
  "ชื่อ",
  "ระดับตลิ่ง (ม.)",
  "ระดับน้ำปัจจุบัน (ม.)",
  "ต่ำกว่าตลิ่ง (ม.)",
  "ปริมาณน้ำ (ลบ.ม./วินาที)",
];

const MOCK_TABLE_ROWS = [
  {
    name: "ลุ่มน้ำเจ้าพระยา",
    bankLevel: 25.1,
    currentWaterLevel: 20.0,
    belowBank: 5.1,
    waterVolume: 201,
  },
  {
    name: "ลุ่มน้ำสาละวิน",
    bankLevel: 16.9,
    currentWaterLevel: 12.5,
    belowBank: 4.4,
    waterVolume: 193,
  },
  {
    name: "ลุ่มน้ำโขง 1",
    bankLevel: 18.5,
    currentWaterLevel: 13.1,
    belowBank: 5.4,
    waterVolume: 158,
  },
  {
    name: "ลุ่มน้ำแม่กก",
    bankLevel: 15.7,
    currentWaterLevel: 12.4,
    belowBank: 3.3,
    waterVolume: 128,
  },
  {
    name: "ลุ่มน้ำเจ้าพระยา",
    bankLevel: 25.1,
    currentWaterLevel: 20.0,
    belowBank: 5.1,
    waterVolume: 201,
  },
  {
    name: "ลุ่มน้ำสาละวิน",
    bankLevel: 16.9,
    currentWaterLevel: 12.5,
    belowBank: 4.4,
    waterVolume: 193,
  },
];

export const VisualizeComponentCustom = () => {
  return (
    <div className="w-full bg-white flex flex-col gap-6 overflow-y-scroll">
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 font-medium">ชื่อส่วนประกอบข้อมูล</p>
        <Input
          readOnly
          value="ระดับน้ำท่า"
          rightSectionPointerEvents="none"
          rightSection={<PencilIcon />}
          className="h-11"
        />
      </div>

      <Table>
        <Table.Thead>
          <Table.Tr>
            {MOCK_TABLE_HEADERS.map((header) => (
              <Table.Th key={header}>
                <Checkbox
                  defaultChecked
                  label={header}
                  styles={{
                    root: {
                      height: "2.75rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "left",
                    },
                    inner: {
                      scale: 1.2,
                      marginLeft: "1.5rem",
                    },
                    body: {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    },
                  }}
                />
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {MOCK_TABLE_ROWS.map((row, index) => (
            <Table.Tr key={`row-${index}`}>
              <Table.Td>
                <Input readOnly value={row.name} />
              </Table.Td>
              <Table.Td>
                <Input readOnly value={row.bankLevel} />
              </Table.Td>
              <Table.Td>
                <Input readOnly value={row.currentWaterLevel} />
              </Table.Td>
              <Table.Td>
                <Input readOnly value={row.belowBank} />
              </Table.Td>
              <Table.Td>
                <Input readOnly value={row.waterVolume} />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <div className="flex flex-col gap-2">
        <p className="text-gray-500 font-medium">แหล่งที่มา</p>
        <Input
          readOnly
          value="กรมชลประทาน"
          rightSectionPointerEvents="none"
          rightSection={<PencilIcon />}
          className="h-11"
        />
      </div>
    </div>
  );
};
