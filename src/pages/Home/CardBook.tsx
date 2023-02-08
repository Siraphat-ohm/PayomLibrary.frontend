import { Card, Image, Text, Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { IconBallpen, IconPaperBag } from '@tabler/icons-react';
import { useCart } from '../../context/CartContext';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7]: theme.white,
        width: "18%",
        marginRight: "20px",
        marginBottom: "20px"
    },

    imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    width:"300px",
    height:"300px",
    overflow:"hidden"
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },  }));

const mockdata = [
    { label: 'Kate Ashton and more...', icon: IconBallpen },
    { label: '2', icon: IconPaperBag },
];

interface book {
    id: string,
    title: string,
    ISBN: string,
    quantity: string,
    category: string,
    img: string
}

interface CardBookProps {
    data: book
}

export function CardBook({ data } : CardBookProps) {
    const { addToCart } = useCart();

    const book: book = {
        id: data.id,
        title: data.title,
        ISBN: data.ISBN,
        quantity: data.quantity,
        category: data.category,
        img: data.img
    }

    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
        <feature.icon size={18} className={classes.icon} stroke={1.5} />
        <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    return (
        <Card withBorder radius="md" className={classes.card} >
            <Card.Section className={classes.imageSection}>
                <Image src={book.img} alt="Tesla Model S" />
            </Card.Section>

            <Group position="apart" mt="md">
                <div>
                <Text weight={500} >{book.title.length > 31 ? `${book.title.substring(0, 27)}...`: book.title}</Text>
                <Text size="xs" color="dimmed">
                    ISBN: {book.ISBN}
                </Text>
                <Badge variant="outline">{book.category}</Badge>
                </div>
            </Group>

            <Card.Section className={classes.section} mt="md">
                <Text size="sm" color="dimmed" className={classes.label}>
                detail
                </Text>

                <Group spacing={8} mb={-8}>
                {features}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                <Button radius="md" size="md" onClick={() => addToCart(book)}>
                    add to cart
                </Button>
                <Button radius="md" size="md" variant="outline" color="gray">
                    view
                </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}