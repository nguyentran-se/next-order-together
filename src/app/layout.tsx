import { ApiClient } from '@/apis/api-client';
import Slack from '@/apis/slack';
import LogInGuard from '@/components/auth/LoginGuard';
import ContentArea from '@/components/layouts/content/ContentArea.component';
import NavBar from '@/components/layouts/navbars/Navbar';
import SideBar from '@/components/layouts/sidebars/Sidebar';
import Providers from '@/providers/QueryClientProvider';
import ToastifyProvider from '@/providers/ToastifyProvider';
import ThemeRegistry from '@/theme/ThemeRegistryProvider';
import { Stack } from '@mui/material';
import { Roboto } from 'next/font/google';
import Redirecting from './Redirecting';
import './globals.css';

const font = Roboto({
  weight: ['100', '300', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'Order together',
//   description: `Let's order together`,
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={font.className}>
        <ThemeRegistry>
          <Providers>
            <Redirecting>
              <ToastifyProvider>
                <main>
                  <Stack direction="row">
                    <SideBar></SideBar>
                    <Stack component="main" flexDirection="column" width="full" sx={{ flexGrow: 1 }}>
                      <Stack>
                        <NavBar></NavBar>
                      </Stack>
                      <Stack>
                        <ContentArea>
                          <LogInGuard>
                            {/* TODO: include later */}
                            {/* <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}> */}
                            {children}
                          </LogInGuard>
                          {/* </Suspense> */}
                        </ContentArea>
                      </Stack>
                    </Stack>
                  </Stack>
                </main>
              </ToastifyProvider>
            </Redirecting>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}

export const apiClient = new ApiClient();
export const slack = new Slack();
