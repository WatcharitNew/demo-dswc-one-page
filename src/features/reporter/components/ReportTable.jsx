"use client";

import Link from "next/link";

import { Badge, Table, UnstyledButton } from "@mantine/core";
import { Report } from "@/icons";

export const getBadgeStatus = (status) => {
  switch (status) {
    case "pending":
      return "yellow";
    case "rejected":
      return "red";
    case "approved":
      return "green";
    default:
      return "gray";
  }
};

export const getStatusText = (status) => {
  switch (status) {
    case "pending": return "รอการอนุมัติ"
    case "rejected": return "ไม่อนุมัติ"
    case "approved": return "อนุมัติ"
    default: return status
  }
}

export const ReportTable = ({data = []}) => {
  const rows = data.map((report, idx) => (
    <Table.Tr key={`${report.template_name}-${idx}`}>
      <Table.Td>{report.date}</Table.Td>
      <Table.Td>{report.order}</Table.Td>
      <Table.Td>{report.time}</Table.Td>
      <Table.Td>{report.template_name}</Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          color={getBadgeStatus(report.status)}
          size="lg"
          style={{ fontWeight: 400 }}
        >
          {getStatusText(report.status)}
        </Badge>
      </Table.Td>
      <Table.Td>
        <UnstyledButton
          component={Link}
          className="col mx-auto items-center text-xs"
          href={`/reporter/${idx + 1}`}
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
