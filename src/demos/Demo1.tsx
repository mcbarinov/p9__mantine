import { AppShell, Group, Anchor, Text } from "@mantine/core";

export default function Demo1() {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 50 }} padding="md">
      {/* ===== HEADER ===== */}
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text fw={700} fz="lg">
            MyLogo
          </Text>

          <Group gap="md">
            <Anchor href="#">Home</Anchor>
            <Anchor href="#">About</Anchor>
            <Anchor href="#">Contact</Anchor>
          </Group>
        </Group>
      </AppShell.Header>

      {/* ===== MAIN CONTENT ===== */}
      <AppShell.Main>
        <Text fz="xl" fw={600} mb="md">
          Welcome to the Mantine Page
        </Text>

        {Array.from({ length: 200 }, (_, i) => (
          <Text key={i} mb="sm">
            This is some sample content to demonstrate the AppShell layout.
            Scroll down to see the footer.
          </Text>
        ))}
      </AppShell.Main>

      {/* ===== FOOTER ===== */}
      <AppShell.Footer>
        <Group h="100%" px="md" justify="space-between">
          <Text fz="sm" c="dimmed">
            © 2025 MyCompany
          </Text>

          <Group gap="sm">
            <Anchor href="#" fz="sm">
              Privacy
            </Anchor>
            <Anchor href="#" fz="sm">
              Terms
            </Anchor>
          </Group>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
