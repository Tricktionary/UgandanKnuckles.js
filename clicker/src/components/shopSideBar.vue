<template>
    <v-navigation-drawer app clipped fixed>
        <h2 class="mt-3 ml-3 grey--text"><v-icon>fas fa-shopping-cart</v-icon> Knuckles Shop</h2>
        <v-list dense>

            <v-list-tile to="/1">
                <v-list-tile-action>
                    <v-icon>add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Soldier</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/2">
                <v-list-tile-action>
                    <v-icon>add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Big Brother</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/3">
                <v-list-tile-action>
                    <v-icon>add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Tank</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/4">
                <v-list-tile-action>
                    <v-icon>add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Prince</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/4">
                <v-list-tile-action>
                    <v-icon>add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Princess</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/4">
                <v-list-tile-action>
                    <v-icon>add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy King</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="/4">
                <v-list-tile-action>
                    <v-icon>add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Buy Queen</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name:"sideBar",
    
}
</script>
<style scoped>

</style>
