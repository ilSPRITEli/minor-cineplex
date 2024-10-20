export function Footer() {
  return (
    <footer className="py-6 md:px-20 md:py-0 bg-[#2c0909] text-white/50">
      <div className="flex flex-col items-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose md:text-left">
          Built by{' '}
          <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
            shadcn
          </a>
          . The source code is available on{' '}
          <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
