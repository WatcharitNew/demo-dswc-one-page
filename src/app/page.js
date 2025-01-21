export default function Home() {
  return (
    <div className="w-full flex flex-col items-center pt-7">
      <div className="max-w-[78.875rem]">
        <DisasterFilter disasters={DISASTERS} />
      </div>
    </div>
  );
}
