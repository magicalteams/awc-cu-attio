import type { Status } from "@/content/types";

const labels: Record<Status, string> = {
  shipped: "Shipped",
  "in-progress": "Wrapping up",
  scoping: "Scoping",
  deferred: "Deferred",
};

const classes: Record<Status, string> = {
  shipped: "tag tag-green",
  "in-progress": "tag tag-warn",
  scoping: "tag tag-orange",
  deferred: "tag tag-ink",
};

export function StatusTag({ status }: { status: Status }) {
  return <span className={classes[status]}>{labels[status]}</span>;
}
