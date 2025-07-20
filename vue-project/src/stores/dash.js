import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useDash = defineStore("dash", {
    state: () => ({
        dashdatas: [],
        dashdata: "",
        isLoading: false
    }),
    getters: {
        getdashdatas: (state) => state.dashdatas 
    },
    actions: {
        async fetchAll () {
            this.isLoading = true;
            try {
                this.dashdatas = useLocalStorage('data', []).value;
                return this.dashdatas;
            } catch (err) {
                console.log(err.message);
            } finally {
                this.isLoading = false;
            }
        },
        async fetchSingle (id) {
            this.isLoading = true;
            try {
                this.dashdatas.forEach((i) => {
                    if (i?.id == id) {
                        this.dashdata = i;
                    }
                });
                return { data: this.dashdata };
            } catch (err) {
                console.log(err.message);
            } finally {
                this.isLoading = false;
            }
        },
        async create (data) {
            this.isLoading = true;
            try {
                this.dashdatas.push(data);
                return this.dashdatas;
            } catch (err) {
                console.log(err.message);
            } finally {
                this.isLoading = false;
            }
        },
        async update (data) {
            this.isLoading = true;
            try {
                const index = this.dashdatas.findIndex(item => item?.id == data.id);
                if (index !== -1) {
                    this.dashdatas[index] = data;
                }
                return this.dashdatas;
            } catch (err) {
                console.log(err.message);
            } finally {
                this.isLoading = false;
            }
        },
        async remove (id) {
            this.isLoading = true;
            try {
                this.dashdatas.forEach((dt, i) => {
                    if (dt?.id == id) {
                        let Confirm = window.confirm("Do you want to remove this data?");
                        if (Confirm) {
                            this.dashdatas.splice(i, 1);
                        }
                    }
                });
                return this.dashdatas;
            } catch (err) {
                console.log(err.message);
            } finally {
                this.isLoading = false;
            }
        },
    }
});