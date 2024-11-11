const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <div className="logo font-bold text-3xl inline-block">Udemy</div>
      <ul>
        <MenuItem url="#" title="Khu vực học tâp" />
        <MenuItem url="/explore" title="Khu vực khám phá" />
      </ul>
    </div>
  );
};

function MenuItem({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li className="py-2">
      <a href={url}>
        {icon}
        {title}
      </a>
    </li>
  );
}
export default Sidebar;
