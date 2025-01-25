import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import "dayjs/locale/th";

dayjs.extend(buddhistEra);
dayjs.locale("th");

export default dayjs