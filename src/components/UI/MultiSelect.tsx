import React, { useEffect, useRef, useState } from "react";

export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type MultiSelectProps = {
  options: Option[];
  value?: Option[];
  defaultValue?: Option[];
  onChange?: (value: Option[]) => void;
  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;
  className?: string;
  maxDropdownHeightClass?: string;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select...",
  searchable = true,
  disabled = false,
  className = "",
  maxDropdownHeightClass = "max-h-60",
}) => {
  const [internalValue, setInternalValue] = useState<Option[]>(defaultValue ?? []);
  const selected = value !== undefined ? value : internalValue;

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  const toggleValue = (opt: Option) => {
    if (disabled) return;

    const exists = selected.some((s) => s.value === opt.value);
    let newVal: Option[];

    if (exists) newVal = selected.filter((s) => s.value !== opt.value);
    else newVal = [...selected, opt];

    if (value === undefined) setInternalValue(newVal);
    onChange?.(newVal);
  };

  const removeTag = (val: string) => {
    if (disabled) return;

    const newVal = selected.filter((s) => s.value !== val);
    if (value === undefined) setInternalValue(newVal);
    onChange?.(newVal);
  };

  const clearAll = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (disabled) return;

    if (value === undefined) setInternalValue([]);
    onChange?.([]);
    setQuery("");
    setOpen(false);
  };

  useEffect(() => {
    const onDocClick = (ev: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(ev.target as Node)) {
        setOpen(false);
        setQuery("");
        setHighlightIndex(-1);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;

    if (!open && ["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
      setOpen(true);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((hi) => Math.min(hi + 1, filtered.length - 1));
      scrollToHighlighted();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((hi) => Math.max(hi - 1, 0));
      scrollToHighlighted();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && highlightIndex < filtered.length) {
        const opt = filtered[highlightIndex];
        if (!opt.disabled) toggleValue(opt);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
      setHighlightIndex(-1);
      (e.target as HTMLInputElement).blur();
    } else if (e.key === "Backspace") {
      if (query === "" && selected.length > 0) {
        removeTag(selected[selected.length - 1].value);
      }
    }
  };

  const scrollToHighlighted = () => {
    const container = listRef.current;
    if (!container) return;

    const el = container.querySelector<HTMLElement>(`[data-index="${highlightIndex}"]`);
    if (el) {
      const offsetTop = el.offsetTop;
      const elBottom = offsetTop + el.offsetHeight;
      if (offsetTop < container.scrollTop) container.scrollTop = offsetTop;
      else if (elBottom > container.scrollTop + container.clientHeight)
        container.scrollTop = elBottom - container.clientHeight;
    }
  };

  return (
    <div className={`relative text-sm ${className}`} ref={rootRef}>
      <button
        type="button"
        className={`w-full bg-white border border-gray-200 rounded-lg focus:outline-blue-500 px-3 py-2 flex items-center gap-2 ${
          disabled ? "opacity-60 cursor-not-allowed" : ""
        }`}
        onClick={() => !disabled && inputRef.current?.focus()}
      >
        <div className="flex-1 flex flex-wrap items-center gap-1">
          {selected.length === 0 && query === "" && (
            <span className="text-gray-400 select-none">{placeholder}</span>
          )}

          {selected.map((opt) => (
            <span
              key={opt.value}
              className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 rounded-full text-xs"
            >
              <span className="max-w-40 truncate">{opt.label}</span>
              {!disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(opt.value);
                  }}
                  className="ml-1 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </span>
          ))}

          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setHighlightIndex(0);
            }}
            onKeyDown={onKeyDown}
            className="flex-1 min-w-20 bg-transparent outline-none px-1 py-0.5"
            disabled={!searchable || disabled}
            onFocus={() => !disabled && setOpen(true)}
          />
        </div>

        {selected.length > 0 && !disabled && (
          <button className="text-gray-400 hover:text-gray-600 px-1 cursor-pointer" onClick={clearAll}>
            Clear
          </button>
        )}
      </button>

      {open && (
        <div
          className={`absolute w-full bg-white border border-gray-200 rounded shadow mt-1 z-50 ${maxDropdownHeightClass} overflow-auto`}
          ref={listRef}
        >
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-gray-500">No options</div>
          ) : (
            filtered.map((opt, idx) => {
              const checked = selected.some((s) => s.value === opt.value);
              const highlighted = idx === highlightIndex;

              return (
                <div
                  key={opt.value}
                  data-index={idx}
                  className={`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-50 ${
                    highlighted ? "bg-gray-100" : ""
                  } ${opt.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => !opt.disabled && toggleValue(opt)}
                >
                  <div className="flex items-center gap-2">
                    <input type="checkbox" readOnly checked={checked} className="h-4 w-4" />
                    {opt.label}
                  </div>

                  {checked && (
                    <svg className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
