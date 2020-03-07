<template>
    <v-container class="ma-0 pa-0">
        <v-tooltip
            v-for="tag in tags"
            :key="tag.text"
            open-on-click
            open-on-hover
            top
        >
            <template v-slot:activator="{ on }">
                <v-icon
                    x-small
                    v-on="on"
                    :color="spicyColor(tag)"
                >
                    {{ tag.icon }}
                </v-icon>
            </template>
            <span>{{ tag.text }}</span>
        </v-tooltip>
    </v-container>
</template>

<script>
    import { DishTags } from '../../data/dishTags';

    export default {
        name: 'DishTags',
        props: {
            tags: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            spicyColor (tag) {
                return tag === DishTags.SPICY.valueOf() ? 'red' : '';
            }
        }
    };
</script>

<style scoped>

</style>
