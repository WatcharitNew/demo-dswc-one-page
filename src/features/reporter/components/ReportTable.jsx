"use client";

import Link from "next/link";
import { MOCK_REPORT_LIST } from "../constants";

import { Badge, Table, UnstyledButton } from "@mantine/core";
import { Report } from "@/icons";

const getBadgeStatus = (status) => {
  switch (status) {
    case "รอการอนุมัติ":
      return "yellow";
    case "ไม่อนุมัติ":
      return "red";
    case "อนุมัติ":
      return "green";
    default:
      return "gray";
  }
};

export const ReportTable = () => {
  const rows = MOCK_REPORT_LIST.map((report) => (
    <Table.Tr key={report.id}>
      <Table.Td>{report.date}</Table.Td>
      <Table.Td>{report.count}</Table.Td>
      <Table.Td>{report.times}</Table.Td>
      <Table.Td>{report.name}</Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          color={getBadgeStatus(report.status)}
          size="lg"
          style={{ fontWeight: 400 }}
        >
          {report.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <UnstyledButton
          component={Link}
          className="col mx-auto items-center text-xs"
          href={`#${report.id}`}
        >
          <Report className="size-5" />
          ดูรายงาน
        </UnstyledButton>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped="even" withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>วันที่รายงานเหตุ</Table.Th>
          <Table.Th>ครั้งที่</Table.Th>
          <Table.Th>เวลาประมวลผล</Table.Th>
          <Table.Th>Template</Table.Th>
          <Table.Th>สถานะ</Table.Th>
          <Table.Th>จัดการ</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
