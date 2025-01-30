import { ReporterLayout } from "@/features/reporter/layouts";

export default function Layout({ children }) {
  return <ReporterLayout step={2}>{children}</ReporterLayout>;
}
