import { ApiClient } from '@/apis/api-client';
import Slack from '@/apis/slack';
import ContentArea from '@/components/ContentArea.component';
import NavBar from '@/components/NavBar.component.';
import Redirecting from '@/components/Redirecting';
import SideBar from '@/components/SideBar.component';
import ToastifyProvider from '@/components/ToastifyProvider';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Providers from '@/utils/provider';
import { Stack } from '@mui/material';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Order together',
  description: `Let's order together`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
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
                          {/* TODO: include later */}
                          {/* <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}> */}
                          {children}
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
