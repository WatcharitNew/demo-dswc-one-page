"use client";

import { useEffect, useState } from "react";
import { Image, Autocomplete, Select, Button } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendarEventFilled, IconChevronDown } from "@tabler/icons-react";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { Controller, useForm } from "react-hook-form";
import "dayjs/locale/th";
import "@mantine/dates/styles.css";
import { useRouter } from "next/navigation";

import { PROVINCES, TYPE_USER } from "@/constants";
import { useAuthContext } from "@/lib/providers/auth";
import clsx from "clsx";

dayjs.extend(buddhistEra);

function LoginPage() {
  const { isAuth, isLoading, signIn } = useAuthContext();
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const iconChevronDown = <IconChevronDown size={16} />;
  const iconCalendarEventFilled = <IconCalendarEventFilled size={16} />;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isAuth && !isLoading) {
      router.push("/");
    }
  }, [isAuth, isLoading, router]);

  const _handleSubmit = ({ province, date, role }) => {
    if (!province || !date || !role) {
      setError(true);
      return;
    }

    setError(false);
    signIn(JSON.stringify({ province, date, role }));
    router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-row items-center justify-center gap-[8.25rem]">
      <div className="w-[35.625rem] h-[41.625rem] py-8 px-6 bg-white rounded-2xl flex flex-col items-center gap-[1.875rem]">
        <div className="flex flex-row h-[4.5rem] border-l-[0.5rem] border-orange-400 pl-4">
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 font-medium text-[1.375rem] tracking-[0.03rem]">
              กรมป้องกันและบรรเทาสาธารณภัย กระทรวงมหาดไทย
            </p>
            <p className="text-gray-400 font-normal text-sm">
              Department of Disaster Prevention and Mitigation. Ministry of
              Interior. Thailand
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(_handleSubmit)}
          className="flex flex-col w-full px-6 items-center gap-[1.875rem]"
        >
          <Controller
            control={control}
            name="province"
            render={({ field }) => (
              <Autocomplete
                {...field}
                data={PROVINCES}
                rightSectionPointerEvents="none"
                rightSection={iconChevronDown}
                label="จังหวัด"
                placeholder="เลือกจังหวัด"
                className="w-full h-16"
                styles={{
                  label: { color: "#252525", fontSize: "1.25rem" },
                  dropdown: { color: "#252525", fontSize: "1rem" },
                  input: { height: "full", marginTop: "0.25rem" },
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field }) => (
              <DatePickerInput
                {...field}
                rightSectionPointerEvents="none"
                rightSection={iconCalendarEventFilled}
                label="วันที่"
                placeholder="เลือกวันที่"
                locale="th"
                valueFormat="DD MMMM BBBB"
                monthLabelFormat="BBBB"
                yearLabelFormat="BBBB"
                decadeLabelFormat="BBBB"
                yearsListFormat="BBBB"
                className="w-full h-16"
                styles={{
                  label: { color: "#252525", fontSize: "1.25rem" },
                  calendarHeader: { color: "#252525" },
                  input: { height: "full", marginTop: "0.25rem" },
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <Select
                {...field}
                label="ประเภทผู้ใช้"
                placeholder="เลือกประเภทผู้ใช้"
                data={TYPE_USER}
                className="w-full h-16"
                styles={{
                  label: { color: "#252525", fontSize: "1.25rem" },
                  dropdown: { color: "#252525", fontSize: "1rem" },
                  input: { height: "full", marginTop: "0.25rem" },
                }}
              />
            )}
          />

          <p className={clsx("text-red-400", { invisible: !error })}>
            โปรดระบุข้อมูลให้ครบถ้วน
          </p>

          <Button
            type="submit"
            variant="filled"
            className="w-full bg-blue-1000 hover:bg-black"
          >
            เข้าสู่ระบบ
          </Button>
        </form>

        <div className="flex flex-col mt-auto text-gray-500 gap-2">
          <ul className="list-disc tracking-[0.03rem]">
            <li>
              ผู้พัฒนาแนะนำให้เปิดใช้ด้วยอุปกรณ์ Computer Desktop / Laptop
              <br />
              ทั้งนี้อาจมีอุปกรณ์บางรุ่นที่แสดงผลได้ไม่สมบูรณ์
            </li>
          </ul>
          <p className="text-center">Version 1.00</p>
        </div>
      </div>
      <Image src="/login-logo.png" alt="login logo" w={382} h={542} />
    </div>
  );
}

export default LoginPage;
