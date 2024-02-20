import { createConnectTransport } from "@bufbuild/connect-web";
import { ElizaService } from "@buf/connectrpc_eliza.bufbuild_connect-es/connectrpc/eliza/v1/eliza_connect";
import { createPromiseClient } from "@bufbuild/connect";

const transport = createConnectTransport({
    baseUrl: "https://connect.build/demo",
});
const client = createPromiseClient(ElizaService, transport);

async function test() {
    for await (const response of client.introduce({ name: "Bob Ross", })) {
        console.log(response);
    }
}

void test();
