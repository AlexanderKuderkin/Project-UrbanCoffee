<template>
  <DataTable :value="coffeeData" tableStyle="min-width: 50rem">
    <template #header>
      <div class="text-xl font-bold">Kaffeesorten Übersicht</div>
    </template>
    <Column field="name" header="Name" style="width: 250px"></Column>
    <Column field="description" header="Beschreibung" style="width: 350px"></Column>
    <Column style="width: 10rem">
      <template #body="slotProps">
        <div class="flex flex-wrap gap-2">
          <Button 
            type="button" 
            icon="pi pi-eye" 
            rounded 
            @click="viewDetails(slotProps.data)" 
          />
          <Button 
            type="button" 
            icon="pi pi-pencil" 
            rounded 
            severity="success" 
            @click="editProduct(slotProps.data)" 
          />
          <Button 
            type="button" 
            icon="pi pi-trash" 
            rounded 
            severity="danger" 
            @click="deleteProduct(slotProps.data)" 
          />
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script>
export default {
  name: "CoffeeTable",
  data() {
    return {
      coffeeData: [
        {
          name: "Espresso",
          description: "Ein starker Kaffee mit intensivem Geschmack.",
        },
        {
          name: "Latte Macchiato",
          description: "Milchig und sanft, perfekt für den Nachmittag.",
        },
        {
          name: "Cappuccino",
          description: "Kaffee mit einer Schicht aus Milchschaum.",
        },
      ],
    };
  },
  methods: {
    viewDetails(coffee) {
      alert(`Details für: ${coffee.name}`);
    },
    editProduct(coffee) {
      alert(`Bearbeiten: ${coffee.name}`);
    },
    deleteProduct(coffee) {
      if (confirm(`Möchtest du ${coffee.name} wirklich löschen?`)) {
        this.coffeeData = this.coffeeData.filter((c) => c.name !== coffee.name);
      }
    },
  },
};
</script>

<style scoped>
/* Optional: Styling für die Tabelle */
.text-xl {
  font-size: 1.5rem;
}
.flex {
  display: flex;
}
.gap-2 {
  gap: 0.5rem;
}
.rounded {
  border-radius: 50%;
}
</style>
