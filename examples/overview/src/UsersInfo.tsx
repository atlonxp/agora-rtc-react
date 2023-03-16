export const UsersInfo = ({ published, total }: { published: number; total: number }) => (
  <div className="p-4 text-xl">
    <span className="inline-flex items-center gap-1 py-2 px-3 rd b-1 b-solid c-coolgray-6">
      <i className="i-lucide-users c-coolgray-3" />
      <samp className="text-base c-coolgray-3">
        {published}/{total}
      </samp>
    </span>
  </div>
);
