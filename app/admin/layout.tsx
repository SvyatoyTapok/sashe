import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const auth = (await cookies()).get("auth")?.value;

    if (auth !== "true") {
        redirect("/login");
    }

    return <div className="p-6">{children}</div>;
}