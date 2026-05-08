export namespace SubscriptionAPI {
  export interface SubscriptionUser {
    id: string; name: string; username: string;
    headline: string | null; photo_url: string | null; photo_key: string | null;
  }

  // POST /api/subscription/:id
  export interface ToggleResponse { subscribed: boolean; subNum: number; }

  // GET /api/subscriptions
  export interface FetchSubscriptionsResponse { subs: SubscriptionUser[]; }
}
