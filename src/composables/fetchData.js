import axios from "axios";
import { ref } from "vue";

export const useFetchData = () => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(true);

    const fetchData = async (url) => {
        loading.value = true;
        try {
            const res = await axios.get(url);
            data.value = res.data;
            console.log(data.value)
        } catch (e) {
            error.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    };

    return { data, error, loading, fetchData };
};