type TActiveLinkProps = {
    url: string;
    children: React.ReactNode;
};
type TMenuItem = {
    url: string;
    title: string;
    icon: React.ReactNode;
};


type ICreateUserParams = {
    clerkId: string;
    username: string;
    name?: string;
    email: string;
    avatar?: string
}
export {TActiveLinkProps, TMenuItem, ICreateUserParams};