"use client";

import { MOCK_REPORT_LIST } from "../constants";

import { Table } from "@mantine/core";

export const ReportTable = () => {
  const rows = MOCK_REPORT_LIST.map((report) => (
    <Table.Tr key={report.id}>
      <Table.Td>{report.date}</Table.Td>
      <Table.Td>{report.count}</Table.Td>
      <Table.Td>{report.times}</Table.Td>
      <Table.Td>{report.name}</Table.Td>
      <Table.Td>{report.status}</Table.Td>
      <Table.Td>Action</Table.Td>
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
