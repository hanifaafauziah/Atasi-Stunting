import {
  Link,
  Button,
  Stack
} from '@chakra-ui/react';

export default function ChartButton(props: { name: any; href: any; }) {
  const { name, href } = props;
  return(
    <Stack mr={5}>
      <Link href={href} isExternal>
        <Button>
          {name}
        </Button>
      </Link>
    </Stack>
  );
}
