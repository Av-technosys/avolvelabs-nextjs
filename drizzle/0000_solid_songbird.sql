CREATE TABLE "blog_categories" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "blog_categories_name_key" UNIQUE("name"),
	CONSTRAINT "blog_categories_slug_key" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "blogs" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"category_id" text NOT NULL,
	"publish_date" date NOT NULL,
	"main_banner_image" text NOT NULL,
	"author_name" text NOT NULL,
	"meta_title" text,
	"meta_description" text NOT NULL,
	"content" text NOT NULL,
	"is_draft" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "blogs_slug_key" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."blog_categories"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "blogs_category_id_idx" ON "blogs" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX "blogs_created_at_id_idx" ON "blogs" USING btree ("created_at","id");