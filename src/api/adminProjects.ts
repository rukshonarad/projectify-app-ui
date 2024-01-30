interface createProjectInput {
    name: string;
    description: string;
}

class AdminProjects {
    url: string;
    constructor() {
        this.url = `${
            process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_PROJECTIFY_API_URL_LOCAL
                : process.env.REACT_APP_PROJECTIFY_API_URL
        }/projects`;
    }
    async create(input: createProjectInput) {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";

            const response = await fetch(`${this.url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }
}

export const adminProjects = new AdminProjects();
