import useQuery from "./useQuery"

export default function usePageNumber(max) {
    const page = Number(useQuery().get('page') ?? 1)
    
    if (page <= 1) {
        return 1
    }

    if (page !== undefined && page >= max) {
        return max
    }

    return page
}