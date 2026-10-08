type TitelForAllPrpos = {
  titleThisPage: string;
  textDetails: string;
};

export default function TitleForAll({
  titleThisPage,
  textDetails,
}: TitelForAllPrpos) {
  return (
    <section className="w-full py-1 px-2">
      <div className="flex flex-col gap-3">
        <p className="text-4xl lg:text-5xl font-bold text-primary tracking-tighter">
          {titleThisPage}
        </p>
        <p className="text-[14px] lg:text-[16px] font-semibold tracking-tighter text-muted-foreground">
          {textDetails}
        </p>
      </div>
    </section>
  );
}
