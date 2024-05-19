'use client';

import {AppShell, Burger, Flex, ScrollArea} from "@mantine/core";
import styles from "@/styles/layout/Layout.module.css";
import {useDisclosure, useViewportSize} from "@mantine/hooks";
import {useEffect, useRef, useState} from "react";

const Layout = ({ children, footer, footerClassName, headerClassName, enableContentAutoScroll=true }) => {
  const { width, height } = useViewportSize();
  const contentRef = useRef();
  const [scrollMaw, setScrollMaw] = useState(0);
  const [scrollMah, setScrollMah] = useState(0);

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const content = (
    <Flex p={12}>
      { children }
    </Flex>
  );

  const burgerBtns = (
    <>
      <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom={'sm'} size={'sm'} />
      <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom={'sm'} size={'sm'} />
    </>
  );

  useEffect(() => {
    setScrollMaw(contentRef?.current?.clientWidth);
    setScrollMah(contentRef?.current?.clientHeight);
  }, [contentRef, width, height]);

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Navbar className={styles.navbar} withBorder={false}>
        <Flex className={styles.navbarHeader}>
          { burgerBtns }
        </Flex>

        <Flex>

        </Flex>
      </AppShell.Navbar>

      <AppShell.Main className={styles.main}>
        <header className={`${styles.header} ${headerClassName || ''}`}>
          { !desktopOpened && burgerBtns }
        </header>

        <Flex
          ref={contentRef}
          className={styles.content}
        >
          {
            enableContentAutoScroll ? (
              <ScrollArea.Autosize
                maw={scrollMaw}
                mah={scrollMah}
              >
                { content }
              </ScrollArea.Autosize>
            ) : content
          }
        </Flex>

        {
          footer &&
          <footer className={`${styles.footer} ${footerClassName || ''}`}>
            { footer }
          </footer>
        }
      </AppShell.Main>
    </AppShell>
  )
};

export default Layout;