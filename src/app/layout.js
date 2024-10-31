import Navbar from "@/component/navbar/navbar";
import "./globals.css";

export const metadata = {
    title: "AnAverageHost",
    description: "AnAverageHost | Home",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ minHeight: "100vh" }}>
                <div
                    style={{
                        minHeight: "100vh",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <div style={{ flex: "1", maxHeight: "3rem" }}>
                        <Navbar />
                    </div>
                    <div style={{ flex: "9" }}>{children}</div>
                </div>
            </body>
        </html>
    );
}
