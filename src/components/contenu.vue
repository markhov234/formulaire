<template>
<div>
    <h1> Notre premier formulaire</h1>

    <form class=" flex rounded-md grid grid-cols-6 gap-6 bg-red-300 h-full" action="">
        <div class="m-2 col-span-6 sm:col-span-3">
            <label for="prenom" class="block text-sm font-medium text-gray-700">Ton prénom</label>
            <input v-on:input='toggleResult' v-model.lazy='formData.prenom' type="text" id='prenom' class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="m-2 col-span-6 sm:col-span-3">
            <label for="nom" class="block text-sm font-medium text-gray-700">Ton nom</label>
            <input v-model.lazy="formData.nom" type="text" id='nom' class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class=" m-2 col-span-6 sm:col-span-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Ta description</label>
            <input v-model.lazy='formData.description' type="text" id='numero' class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <h2 class="text-2xl col-span-6 sm:col-span-6">Select box</h2>
        <select class="col-span-6 sm:col-span-2 h-6 mt-4 " v-model="formData.select">
            <option v-bind:key='index' v-for="(pays, index) in formData.listePays">
                {{pays}}
            </option>
        </select>

        <div class="flex m-2 col-span-6 sm:col-span-4">
            <h2 class="text-2xl col-span-6 sm:col-span-6">checkbox</h2>
            <div class=" m-2 col-span-6 sm:col-span-1">
                <input v-model="formData.checkFruits" value='fraise' id="fraise" type="checkbox" class="block text-sm font-medium text-gray-700">
                <label class="block text-sm font-medium text-gray-700" for="fraise"> Coche la fraise</label>
            </div>
            <div class=" m-2 col-span-6 sm:col-span-1">
                <input v-model="formData.checkFruits" value='banane' id="banane" type="checkbox" class="block text-sm font-medium text-gray-700">
                <label class="block text-sm font-medium text-gray-700" for="banane"> Coche la banane</label>
            </div>
            <div class=" m-2 col-span-6 sm:col-span-1">
                <input v-model="formData.checkFruits" value='orange' id="orange" type="checkbox" class="block text-sm font-medium text-gray-700">
                <label class="block text-sm font-medium text-gray-700" for="orange"> Coche la orange</label>
            </div>
        </div>

        <button v-on:click.prevent='envoiForm' class="bg-blue-500 sm:col-span-6 col-span-6 rounded-lg px-6 py-2 mb-2  m-auto ">Envoyer le formulaire</button>
    </form>
    <br>
    <div class="border-2 border-gray-700 rounded-lg " v-if='infoSubmit'>
        <h2 class="text-3xl col-span-6 sm:col-span-6">Résultats</h2>
        <div class="m-2 col-span-6 sm:col-span-6">
            <p>Prénom :{{formData.prenom}} </p>
            <p>Texte : {{formData.nom}} </p>
            <p>La raison : {{formData.description}}</p>
            <p>Les Résultats checkBox</p>
            <ul>
                <li class="text-purple-700" v-bind:key="index" v-for="(fruits,index) in formData.checkFruits"> {{fruits}}</li>
            </ul>

            <p>Choix du select : {{formData.select}}</p>

        </div>
    </div>

</div>
</template>

<script>
export default ({
    data() {
        return {
            formData: {
                prenom: '',
                nom: '',
                numero: '',
                checkFruits: [

                ],
                select: '',
                listePays: ['Russie', 'Canada', 'USA', 'France', 'Japon', 'Mexique'],

            },
            infoSubmit: false,
        }
    },
    methods:{
        envoiForm:function(){
            this.infoSubmit=true;
        },
        toggleResult:function(){
            this.infoSubmit=false;
        }
    }
})
</script>
